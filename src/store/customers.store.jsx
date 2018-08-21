import { observable, action, computed} from "mobx";

export default class CustomersStore {
    @observable customers = [
        {amount:'100', name:"Peter Jines", email:'pjones@gmail.com'}
    ];
    @observable step = 1;
    @observable total = 10000;


    @action
    addNewCustomer(customer) { 
       this.customers.push(customer);
       this.step++;
    }

    @computed get spent() {
        let newTotal = 0;
        this.customers.forEach(item=>{
            newTotal+=parseFloat(item.amount);
        });
        return newTotal;
    }

    @computed get difference() {
        let newTotal = 0;
        this.customers.forEach(item=>{
            newTotal+=parseFloat(item.amount);
        });
        return this.total-newTotal;
    }

}