import {prop, getModelForClass} from '@typegoose/typegoose'


export class MyMovie {

    _id:string

    @prop({type:String, required:true})
    title:string

    @prop({type:String, required:true})
    imagePath:string

}

const MyMovieModel = getModelForClass(MyMovie)

export default MyMovieModel