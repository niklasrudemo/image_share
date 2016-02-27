if (Meteor.isClient) {
    var img_data = [
        {
            img_src:"laptops.jpg",
            img_alt:"some colored laptops"
        },
        {
            img_src:"laptops2.jpg",
            img_alt:"some colored laptops2"
        },
        {
            img_src:"laptops3.jpg",
            img_alt:"some colored laptops3ß"
        }
]

    Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {
    console.log("I am the server");
}
