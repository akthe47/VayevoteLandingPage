import {Injectable} from "@angular/core";
import {GenericService} from "./generic.service";
import {Config} from "../config";
import {StorageService} from "./storage.service";
import {HttpClient} from "@angular/common/http";
import {Request} from '../../shared/models/request/request';

@Injectable()
export class RequestService extends GenericService {

  constructor(private http: HttpClient, private stoarageService: StorageService) {
    super();
  }
  save(request:Request) {
    const headers = this.headers.set("Authorization", "Bearer " + this.stoarageService.read("token"));

    let url = Config.baseUrl + "/requests/save";
    return this.http.post(url,request, {
      headers
    });
  }




}
