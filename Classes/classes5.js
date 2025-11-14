class University {
  faculties = [];

  constructor(universityName) {
    this._universityName = universityName;
  }

  get universityName() {
    return this._universityName;
  }

  set universityName(newName) {
    if (newName.length === 0) {
      console.log("The name of the university can't be empty");
    } else {
      this._universityName = newName;
    }
  }

  addFaculty(nameFaculty) {
    if (nameFaculty.length === 0) {
      console.log("The name of faculty can't be empty");
    } else {
      this.faculties.push(nameFaculty);
    }
  }

  deleteFaculty(nameFaculty) {
    const index = this.faculties.indexOf(nameFaculty);
    if (index !== -1) {
      this.faculties.splice(index, 1);
    }
  }

  showFaculties() {
    console.log(`The faculties of ${this.universityName}:`);
    for (const faculty of this.faculties) {
      console.log(`- ${faculty}`);
    }
  }
}

let VSU = new University("VSU");
VSU.addFaculty("FMiIT");
VSU.addFaculty("History");
VSU.addFaculty("Biology");
VSU.showFaculties();
VSU.deleteFaculty("History");
VSU.showFaculties();
