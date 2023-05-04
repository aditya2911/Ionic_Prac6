import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

  name = 'Chaitanya Shetty';
  rollNo = '2022510059';
  collegeName = 'Sardar Patel Institute of Technology';
  userImage = 'https://media.licdn.com/dms/image/D4D03AQGSx1FY-8qlVA/profile-displayphoto-shrink_400_400/0/1680951931948?e=1688601600&v=beta&t=O4dtV1IlJqr1C1Phg9j82EhTiNOKoCHoYwAKVi3Qj7M';
  cgpa = '9.5';
  interests ='Data Science, Machine Learning, Web Development, App Development, Competitive Programming, Sports';
  hsc = '90.00 %'
  ssc = '92.40 %'
  bsc = '9.63'
  constructor() {}
}
