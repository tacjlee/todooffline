import { Todo } from "../store/todolist/types";
import axios from "axios";
import CacheManager from "../cache/CacheManager";

export default class TodoSyncService {
    public BaseUrl: string = "https://5f4dba46eeec51001608ee64.mockapi.io/todo/v1";
    
    initializeServiceWorker(event: any) {
        if(event){
            event.preventDefault();
        }
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function () {
                    return navigator.serviceWorker.ready;
                })
                .then(function (registration) {
                    // If you setup Service worker, you can call SendData here
                })
                .catch(function (err) {
                    console.error('Unable to register service worker.', err);
                });
        }
        else {
            //Put your code here
           
        }
    }

    public static async fetchLocalData() {
        // - Get data from IndexedDB using localForage
        const cache = new CacheManager();
        const jsonStr = await cache.getItem("persist:root") as string;
        const jsonObj: any= JSON.parse(jsonStr);
        const strTodoList = jsonObj.todoList;
        const todoList = JSON.parse(strTodoList);

        return new Promise(function (resolve, reject) {
            resolve(todoList);
        });
    }

    sendDataOnline() {
        var thiz = this;
        alert('You internet is now OK! we will synchronize data to server');
        TodoSyncService.fetchLocalData().then(function (response: any) {
            const todoList: Todo[] = response;
            for(let todo of todoList){
                //Bz mockapi auto generate ID with name "id", so we use todoId to keep orignal data
                let data ={
                    "todoId": todo.id,
                    "text": todo.text,
                    "status": todo.status
                }
                axios.post("https://5f4dba46eeec51001608ee64.mockapi.io/todo/v1/todo", data)      
                .then((response) => {
                    
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        })
        .then(() => console.log("sent data"))
        .catch(function (err: any) {
            console.log(err);
        });
    }

    warningLostInternet(){
        alert("You are offline! When your internet returns, we'll finish up your request.");
    }

    initializeInternetStatusListener() {

        window.removeEventListener('online', this.sendDataOnline);
        window.addEventListener('online', this.sendDataOnline);

        window.removeEventListener('offline', this.warningLostInternet);
        window.addEventListener('offline', this.warningLostInternet);
    }

}
