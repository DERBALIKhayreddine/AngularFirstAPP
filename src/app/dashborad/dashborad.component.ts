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
    this.service.getAllEnvents().subscribe((res)=>{this.Nb_Events=res.length})
    this.service.getAllAricles().subscribe((res)=>{this.Nb_Articles=res.length})

  }
  constructor(private service :DashbordService){}


  Nb_Articles!: number;
  Nb_Events !: number;
  Nb_Members !: number;
  Nb_Tools !: number;

  chartData: ChartDataset[]=[];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};

  chartData2: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels2: string[] = ['A','B','C','D','E','F'];
  chartOptions2: ChartOptions = {};


}
