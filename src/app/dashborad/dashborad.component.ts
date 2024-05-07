import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { DashbordService } from 'src/service/dashbord.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  tab_nbarticles: any[] = [];
  tab_student :any[]=[];

  ngOnInit(): void {
    this.service.getAllMemebers().subscribe((res)=>{this.Nb_Members=res.length
      for(let i =0;i<this.Nb_Members;i++){
        this.chartLabels.push(res[i].name)
        this.tab_nbarticles.push(res[i].tab_pub.length)
        this.chartData = [{
          label: 'Number of Articles',
          data: this.tab_nbarticles
        }];
      }
    })

    this.displayPie();
    this.displayBar();
  }
  constructor(private service :DashbordService){}

  //declarations 
  Nb_Articles!: number;
  Nb_Events !: number;
  Nb_Members !: number;
  Nb_Tools !: number;
  Nb_student!: number;
  Nb_teacher !: number;

  chartData: ChartDataset[]=[];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};

  chartData2: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$Pie',
      data: [ ]
    }
  ];
  chartLabels2: string[] = ['Teacher','Student'];
  chartOptions2: ChartOptions = {};

  chartData3: ChartDataset[] = [
    {
      label: 'Number of Events',
      data: []
    }
  ];
  chartLabels3: string[] = [];
  chartOptions3: ChartOptions = {};



  //function
  displayPie(){
    this.service.getAllStudentMembers().subscribe((students) => {
      this.Nb_student = students.length;
      console.warn(students);
      
      this.service.getAllTeacherMembers().subscribe((teachers) => {
        this.Nb_teacher = teachers.length;
        console.warn(teachers);
        
        this.chartData2 = [
          {
            label: '$Pie',
            data: [this.Nb_teacher, this.Nb_student]
          }
        ];
      });
    });
  }
  displayBar() {
    this.service.getAllStudentMembers().subscribe((students) => {
      this.Nb_student = students.length;
      for (let i = 0; i < this.Nb_student; i++) {
        const studentName = students[i].name;
        const eventsCount = students[i].tab_evt.length;
        this.chartData3[0].data.push(eventsCount);
        this.chartLabels3.push(studentName);
      }
    });
  }
  
  
  


}
