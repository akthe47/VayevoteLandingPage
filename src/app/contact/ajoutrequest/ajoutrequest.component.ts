import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {NotificationsService} from 'angular2-notifications';
import {Config} from '../../shared/config';
import {RequestService} from '../../shared/services/request.service';
import {Subscription} from 'rxjs';
import {Request} from '../../shared/models/request/request';
@Component({
  selector: 'app-ajoutrequest',
  templateUrl: './ajoutrequest.component.html',
  styleUrls: ['./ajoutrequest.component.css']
})
export class AjoutrequestComponent implements OnInit {
   request : Request =new Request();
  busy: Subscription;
  public options = {


  };
  //busy: Subscription;
  constructor(
              //private notificationService: NotificationsService,
              //private questionService: QuestionService,
              private requestsService: RequestService) { }

  ngOnInit() {
  }
  add(){
    //name:string,Email:string,descrip:string,type:number
    // this.request.name=name;
    // this.request.Email=Email;
    // this.request.descrip=descrip;
    // this.request.type=type;
    this.busy = this.requestsService.save(this.request)
      .subscribe(
        (data) => {

          console.log(data);
        },
        (error) => {
          console.log(error);
          //this.notificationService.error('Erreur', 'Chargement de la liste est impossible');
        }
      );


  }

}
