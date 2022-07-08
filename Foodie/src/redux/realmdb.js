
import Realm from "realm"


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
    // primaryKey: "id",
};

let realm = new Realm({schema: [ImageSchema,RestuarentSchema], schemaVersion: 3});

let downloaddata=(data)=>{
    console.log('obj[1]', data[0].address)
    console.log('obj[2]', data[1].address)
    console.log('obj[3]', data[2].address)
    console.log('obj[4]', data[3].address)


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
        });
        // console.log('restuarent', restuarent)
    });
    })
}

let getAlldata=()=>{
    return realm.objects('Restuarent')
}

export default realm;

export{
    getAlldata,
    downloaddata,
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

