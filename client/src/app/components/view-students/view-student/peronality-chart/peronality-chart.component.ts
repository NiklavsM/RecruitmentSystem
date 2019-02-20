import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonalityTraitDescriptionComponent} from "./personality-trait-description/personality-trait-description.component";

@Component({
  selector: 'app-peronality-chart',
  templateUrl: './peronality-chart.component.html',
  styleUrls: ['./peronality-chart.component.scss']
})
export class PeronalityChartComponent implements OnInit {

  public radarChartLabels: string[] = ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56], label: 'Personality'}
  ];
  public radarChartType: string = 'radar';
  public radarChartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100
      }
    }
  };

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public openInfo() {
    const modalRef = this.modalService.open(PersonalityTraitDescriptionComponent);
  }
}
