import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

interface AccordionItem {
  title: string;
  expanded: boolean;
}

interface ListItem{
  name:String,
  designation:String,
  email:String,
  phone:String,
  domain:String,
  image:String,

}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule]
})
export class Tab2Page {

  constructor( private router:Router) {}
  routeToRegister(){
    // this.router.na
    this.router.navigateByUrl("tabs/tab3");
  }
  items :ListItem[] = [
    {
      name:"PhonePe",
      designation:"Software Engineer",
      email:"contactus@phonepe.ac.in",
      phone:"+91 (22) – 26707440",
      domain:"MCA",
      image:"data:image/png;base64,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"
    },
    {
      
      name:"UNIQLO",
      designation:"Data Engineer",
      email:"contactus@uniqlo.ac.in",
      phone:"+91 (22) – 26707440",
      domain:"MCA",
      image:"data:image/png;base64,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"
    }
    ,
    {
    name:"JPMC",
    designation:"Data Analyst",
    email:"contactus@jpmc.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_200_200/0/1656681489088?e=2147483647&v=beta&t=R7DLqSnADohxWh4KOzOiRIQkvz2x1vMPOjBRNzoB-3Q"
  },
  {
    name:"Nomura",
    designation:"Cloud Architect",
    email:"contactus@nomura.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6I2_c9K7l9mLJYWFDSnzagpZJCkzwNiBibQ&usqp=CAU"
  },
  

  {
    name:"MSCI",
    designation:" Software Engineer",
    email:"contactus@msci.ac.in",
    phone:"+91 (22) – 26707440 ",
    domain:"MCA & BTech",
    image:"https://uploads-ssl.webflow.com/628c996dbfad79f541cdb064/641c72cbf3015fdbba3a7f4f_MSCI.png"
  },
  {
    name:"Deutsche Bank",
    designation:"Software Engineer",
    email:"contactus@nomura.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"data:image/png;base64,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"
  }
  ,
  {
    name:"Barclays",
    designation:"Software Tester",
    email:"contactus@barclays.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"data:image/png;base64,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"
  }
  ,

  {
    name:"Deloitte",
    designation:"Asst. Analyst",
    email:"contactus@deloitte.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"data:image/png;base64,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"
  }

  ];



}