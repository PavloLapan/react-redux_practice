import {Component} from 'react'

export default class BookStore extends Component{

    data=[
        {
            id: 1,
            title: 'Some Awesome Book',
            author: 'Awesome author`s name',
            price: 35,
            src: 'https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg'
        },
        {
            id: 2,
            title: 'Second Life',
            author: 'Nick Redfall',
            price: 45,
            src: 'https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg'
        }
    ];

    getBooks(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (Math.random() > 0.25){
                    resolve(this.data)
                }
                else {
                    reject(new Error(''))
                }
            },700)

        })
    }
};