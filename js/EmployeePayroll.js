class EmployeePayrollData
{
 // getter and setter method 
    get id() { 
        return this._id; 
    }
    set id(id) {
        this._id = id;
    }

    get name() { 
        return this._name; 
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z1{1}[a-zA-Z\\sl{2,}$')        
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() { 
        return this._profilePic; 
    } 
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { 
        return this._gender; 
    } 
    set gender(gender) {
        this._gender = gender;
    }

    get department() { 
        return this._department; 
    }                        
    set department(department) {
        this._department = department;
    }                               
                                                             
    get salary() { 
        return this._salary; 
    } 
    set salary(salary) {
        this._satary = salary;
    }    

    get note() { 
        return this._note;
    }     I
    set note(note) {
        this._note = note;
    }    

    get startDate() { 
        return this._startDate; 
    } 
    set startDate(startDate) {
        this._startDate = startDate;
    }    

    // method
    toString() {
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" : 
                    this.startDate.toLocaleDateString("en-US", options);
    return "id=" + this.id + ", name.'" + this.name + ", gender='" + this.gender + 
            ", profilePic='" + this.profilePic + ", department=" + this.department + 
            ", salary=" + this.satary + ", startDate=" + empDate + ", note=" + this.note;
    }
}    

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary—output'); 
    output.textContent = salary.value; 
    salary.addEventListener('input', function() { 
        output.textContent = salary.value;
    });    


const salary = document.querySelector('#salary'); 
const output = document.querySelector('.salary-output'); 
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});