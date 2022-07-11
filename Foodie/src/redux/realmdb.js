
import Realm ,{ UpdateMode}from "realm"


class ImageSchema extends Realm.Object {}
ImageSchema.schema= {
    name: "Images",
    embedded: true,
    properties: {
      url:"string"
    },
};

class RestuarentSchema extends Realm.Object {}
 RestuarentSchema.schema = {
    name: "Restuarent",
    properties: {
        id:"int",
        title: "string",
        address: "string",
        latitude: "string",
        longitude: "string",
        rating:"double",
        total_review:"int",
        description: "string",
        mobile: "string",
        images:{type:"list", objectType:'Images', property:'url'},

    },
    primaryKey: "title",
};

let realm = new Realm({schema: [ImageSchema,RestuarentSchema], schemaVersion: 4});

let downloaddata=(data)=>{
    


    realm.write(()=>{
        data.forEach(obj => {
        realm.create('Restuarent',{
                id: obj.id,
                title: obj.title,
                address: obj.address,
                latitude: obj.latitude,
                longitude: obj.longitude,
                rating: obj.rating,
                total_review: obj.total_review,
                description: obj.description,
                mobile: obj.mobile,
                images: obj.images,
        },"modified");
        // console.log('restuarent', restuarent)
    });
    })
}

let getAlldata=()=>{
    return realm.objects('Restuarent')
}

let deleteAlldata = () => {
    realm.write(() => {
        realm.delete(getAlldata());
    });
};
export default realm;

export{
    getAlldata,
    downloaddata,
    deleteAlldata,
}

//  export const Images= {
//     name: "Images",
//     embedded: true,
//     properties: {
//       url:"string?"
//     },
// };
// export const Restuarent = {
//     name: "Restuarent",
//     properties: {
//         id:"int",
//         title: "string",
//         address: "string",
//         latitude: "string",
//         longitude: "string",
//         rating:"double",
//         total_review:"int",
//         description: "string",
//         mobile: "string",
//         images:{type:"list", objectType:'Images', property:'url'},

//     },
//     primaryKey: "id",
// };

