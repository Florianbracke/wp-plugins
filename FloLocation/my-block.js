wp.blocks.registerBlockType('flof/flolocation',{

    title: 'flolocation',

    icon: 'smiley',

    category: 'common',

    attributes: {

        content: { type: 'string'},

        color: { type: 'string'},

        class: {type: 'string'},

        value: {type: 'string'},

        location: {type: 'string'}

    },

    edit: (props) => {
      // props.setAttributes({

      //   content: getLocation() })

        //  function to get location
      //   updateContent = (position) => {
          
      //      getLocation(); // put this function one scope higher, and postcode will load automatically on page loading

      //       let api = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=jsonv2`;

      //       element = document.querySelector(".location");

      //       fetch(api) // return this as attribute? 

      //           .then(response => 

      //               response.json())

      //                   .then(data => {
      //                     console.log(data.address.postcode)
      //                        element.innerHTML = data.address.postcode;
      //                       // props.setAttributes({ content: data.address.postcode });

      //                     })

      //   }


      //   //  function to get location  
      //   getLocation = () => {

      //     if (navigator.geolocation) {

      //       navigator.geolocation.getCurrentPosition(updateContent);

      //     }

      // }

        return wp.element.createElement("div", null, /*#__PURE__*/wp.element.createElement("span", {
          class: "location"
        }, " your postal code will be here."));

    },

    save: function(props) {
      
      return wp.element.createElement("div", null, /*#__PURE__*/wp.element.createElement("span", {
        class: "location"
      }, " "));
                                                                                             
    //      function getLocation() {
    //                                                                                             console.log("test2");
    //          if (navigator.geolocation) {

    //            navigator.geolocation.getCurrentPosition(updateContent);

    //          }

    //      }

    //      //  function to get location
    //      function updateContent(position){
    //                                                                                             console.log("test3");
    //         getLocation(); // put this function one scope higher, and postcode will load automatically on page loading

    //         let api = `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=jsonv2`;

    //         element = document.querySelector(".location");
           
    //         fetch(api)

    //             .then(response => 

    //                 response.json())

    //                   .then(data => {

    //                     element.innerHTML = data.address.postcode;

    //          })

    //       }
         

      }

}

)

