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
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")        
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
        this._salary = salary;
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
        //console.log(new Date().toLocaleDateString());  
    }    

    // method
    toString() {
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = this.startDate === "undefined" ? "undefined":
                    this.startDate;
    return "id=" + this.id + ", name.'" + this.name + ", gender='" + this.gender + 
            ", profilePic='" + this.profilePic + ", department=" + this.department + 
            ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
}    

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text—error'); 
    name.addEventListener('input', function() { 
         if(name.value.length ==0){
               textError.textContent = "";
               return;
            }
         try {
               (new EmployeePayrollData()).name = name.value;
               textError.textContent = "";
          } catch (e) {
               textError.textContent = e;
          }
    }) ;

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary—output'); 
    output.textContent = salary.value; 
    salary.addEventListener('input', function() { 
        //output.textContent = salary.value;
        checkForUpdate();
    });    
});

const salary = document.querySelector('#salary'); 
const output = document.querySelector('.salary-output'); 
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});


const text = document.querySelector('#name');
const textError = document.querySelector('.text-error'); 
text.addEventListener('input', function() {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(text.value)) 
            textError.textContent = ""; 
        else textError.textContent = "Name is incorrect"; 
    }); 


const save=()=>{
    try {
              let employeePayrollData = createEmployeePayroll();
              createAndUpdateStorage(employeePayrollData);
        } 
        catch (e) {
          console.log(e);
          return;
        }
} 
      
const createEmployeePayroll=()=>{
    let employeePayrollData = new EmployeePayrollData(); 
        try{
                employeePayrollData.name = getInputValueById('#name'); 
                let date = getInputValueById('#month')+" "+getInputValueById('#day')+" "+ 
                        getInputValueById('#year') ;
                date= Date.parse(date)//.toLocaleDateString();
                employeePayrollData.startDate = new Date(date).toLocaleDateString();
            } 
            catch (e)
                {
                    //setTextValue('.text-error', e);
                    throw e;
                }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop(); 
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop(); 
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary'); 
    employeePayrollData.note = getInputValueById('#notes');
  
  //console.log(new Date(date).toLocaleDateString()) 
  //console.log(new Date().toLocaleDateString())           
    console.log(employeePayrollData.toString());
    return employeePayrollData;
}
      
const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue); 
    let selItems = [];
    allItems.forEach(item =>{
         if(item.checked) 
            selItems.push(item.value);
    });
     return selItems;
}

/*
* 1: querySelector is the newer feature.
* 2: The querySelector method can be used when selecting by element name,
*   nesting, or class name.
* 3: querySetector lets you find elements with rules that can't be
*   expressed with getElementById
*/

const getInputValueById=(id)=>{
   let value = document.querySelector(id).value; 
   return value;
}

/*
* 1: getElementById is better supported than querySelector in older versions
*   of the browsers.
* 2: The thing with getElementById is that it only allows to select an
*   element by its id.
*/
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value; 
    return value;
}
 
 
function createAndUpdateStorage(employeePayrollData){

    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
 
    if(employeePayrollList != undefined){
      employeePayrollList.push(employeePayrollData);
    } else{
      employeePayrollList = [employeePayrollData]
    }
    console.log(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
 }     

 const resetForm = () => { 
    setValue('#name',''); 
    unsetSelectedValues('[name=profile]'); 
    unsetSelectedValues('[name=gender]'); 
    unsetSelectedValues('[name=department]'); 
    setValue('#salary',''); 
    setValue('#notes',''); 
    setValue('#day','Day'); 
    setValue('#month','Month');
    setValue('#year','Year');
 }

const unsetSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue); 
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySetector(id); 
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id); 
    element.value = value;
}

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp'); 
    isUpdate = employeePayrollJson ? true : false;
    if (!isUpdate) 
        return;
    employeePayrollObj = JSON.perse(employeePayrollJson); 
    setForm();
}   
   
const setForm = () => {
    setValue('#name', employeePayrollObj._name); 
    setSelectedValues('[name=profile]', employeePayrollObj._profilePic); 
    setSelectedValues('[name=gender]', employeePayrollObj._gender); 
    setSelectedValues('[name=department]', employeePayrollObj._department); 
    setValue('#salary',employeePayrollObj._salary); 
    setTextValue('.salary-output', employeePayrollObj._salary); 
    setValue('#notes',employeePayrollObj._note);
    let date=stringifyDate(employeePayrollObj._startDate).split(""); 
    setValue('#day', date[0]);
    setValue('#month', date[1]);
    setValue('#year', date[2]);
}
   const setSelectedValues = (propertyValue, value) =>{
        let allItems=document.querySelectorAll(propertyValue); 
        allItems.forEach(item => 
            {
                if(Array.isArray(value)) {
                    if (value.includes(item.value)) {
                        item.checked=true;
                    }
                }  
                else if (item.value === value) 
                    item.checked = true;
            });
    }