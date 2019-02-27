import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonalityTraitDescriptionComponent} from "./personality-trait-description/personality-trait-description.component";
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-peronality-chart',
  templateUrl: './peronality-chart.component.html',
  styleUrls: ['./peronality-chart.component.scss']
})
export class PeronalityChartComponent implements OnInit {

  @Input()
  studentId: string;
  public radarChartLabels: string[] = ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness'];

  public radarChartData = [];
  public radarChartType: string = 'radar';
  public radarChartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 50
      }
    }
  };

  constructor(public studentService: StudentService, public modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.studentService.getSurvey(this.studentId).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.populateChart(data);
      }
    }, error => {

    })
  }

  private populateChart(data) {
    let dataArray = [];
    this.radarChartLabels = Object.keys(data).sort();

    for (let key of this.radarChartLabels) {
      dataArray.push(data[key])
    }
    this.radarChartData.push({data: dataArray, label: 'Personality'})
  }

  public openInfo() {
    const modalRef = this.modalService.open(PersonalityTraitDescriptionComponent);
  }
}
