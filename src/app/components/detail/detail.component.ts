import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student/student.service';
import { Student } from '../../model/student';
import { SuperBtnDirective } from '../../directives/super-btn/super-btn.directive';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-detail',
  imports: [SuperBtnDirective],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
    route = inject(ActivatedRoute);
    studentServ = inject(StudentService)
    authServ = inject(AuthService);

    student?:Student;

    constructor(){
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.studentServ.getStudent(id).subscribe({
          next: (data) => this.student = data,
          error: (err) => console.error(err)
        })
      }

    }


    addMarksToStudent(){

      const newMarks = [123, 124, 124]
      if (this.student) {
        this.studentServ.addMarks(this.student?.id, newMarks)
        .then(modifiedStudent => this.student = modifiedStudent)
      }
      
    }
}
