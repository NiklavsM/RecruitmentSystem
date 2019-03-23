import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonalityTraitDescriptionComponent} from './personality-trait-description/personality-trait-description.component';
import {StudentService} from '../../../../services/student.service';

@Component({
  selector: 'app-personality-chart',
  templateUrl: './personality-chart.component.html',
  styleUrls: ['./personality-chart.component.scss']
})
export class PersonalityChartComponent implements OnInit {

  @Input()
  studentId: string;
  public radarChartLabels: string[] = ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness'];

  public radarChartData = [];
  public radarChartType = 'radar';
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
    });
  }

  private populateChart(data) {
    const dataArray = [];
    this.radarChartLabels = Object.keys(data).sort();

    for (const key of this.radarChartLabels) {
      dataArray.push(data[key]);
    }
    this.radarChartData.push({data: dataArray, label: 'Personality'});
  }

  public openInfo() {
    const modalRef = this.modalService.open(PersonalityTraitDescriptionComponent);
  }
}
