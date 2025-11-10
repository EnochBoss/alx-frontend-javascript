namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}
