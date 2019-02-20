import { Injectable, Injector } from '@angular/core';
import { Entry } from "../shared/entry.model"
import { CategoryService } from '../../categories/shared/category.service';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { flatMap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntryService extends BaseResourceService<Entry>{

  constructor(protected injector: Injector, protected categoryService: CategoryService){
    super("api/entries", injector);
  }

  create(entry: Entry): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;

        return super.create(entry);
      })
    )
  }

  update(entry: Entry): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;

        return super.update(entry);
      })
    )
  }

  // private methods

  protected jsonDataToEntries(jsonData: any[]) : Entry[]{
    const entries: Entry [] = [];
    jsonData.forEach(element => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);
    });

    return entries;
  }
  
  protected handleError(error: any) : Observable<any>{
    console.log("Erro na requisição => ", error)
    return throwError(error);
  }

}
