import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
{
  path:'members',
  pathMatch:'full',
  component: MemberComponent,

},
{
  path:'create',
  pathMatch:'full',
  component: MemberFormComponent,

},
{
  path:'',
  pathMatch:'full',
  redirectTo:'login'
},
{
  path:':id/edit',
  pathMatch: 'full',
  component : MemberFormComponent
},
{
  path:'login',
  pathMatch:'full',
  component:LoginComponent,
},
{
  path:'dashborad',
  pathMatch:'full',
  component:DashboradComponent,

},
{
  path:"tools",
  pathMatch:'full',
  component:ToolsComponent

},
{
  path:'events',
  pathMatch:'full',
  component:EventsComponent
},{
  path:'article',
  pathMatch:'full',
  component:ArticleComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
