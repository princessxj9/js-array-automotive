//this includes the vehicle class as a module
import VehicleModule, { Vehicle } from "./vehicle";

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if( this.passenger < this.maximumPassengers){
            console.log(this.make + " " + this.model + " has enough room.")
            return this.passenger
         }
         else {
             if( this.passenger >= this.maximumPassengers){
                 console.log(this.make + " " + this.model + " does not has enough room.")
             }

         }
    }

    start(){
        if( this.fuel > 0 ){
            console.log("vehicle started.");
            return this.started = true
        } 
        else {
            console.log("no gas.");
            return this.started = false;
        }
    }
    ScheduleService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

//this shows how to call from this module...
let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)