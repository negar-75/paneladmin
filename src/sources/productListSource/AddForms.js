export const AddItemInputs = [
    {
        id: 1,
        label: "Item name",
        type: "text",
        placeholder: " ",
        name:"name",
        required: true,
        multiline:false,
        selection:false,
        variant:'standard'
        
      },
      {
        id: 2,
        label: "Description",
        type: "text",
        placeholder: " ",
        name:"description",
        required: true,
        multiline:true,
        selection:false,
        variant:'standard'
        
        
      },
      {
        id: 3,
        label: "Category",
        type: "text",
        placeholder: "",
        name:"category_id",
        required: true,
        selection:true,
        multiline:false,
        variant:'standard'
      },
      {
        id: 4,
        label: "Stations",
        type: "text",
        placeholder: " ",
        name: "station_id",
        required: true,
        multiline:false,
        selection:true,
        variant:'standard'

        
      },
      {
        id: 5,
        label: "Sauce",
        type: "text",
        placeholder: " ",
        name:  "sauces",
        required: true,
        selection:true,
        multiline:false,
        variant:'standard'

        
      },
      {
        id: 6,
        label: "Size",
        type: "text",
        placeholder: " ",
        name: "size",
        required: true,
        selection:false,
        multiline:false,
        variant:'standard'
        
      },
      {
        id: 7,
        label: "Price",
        type: "number",
        placeholder: " ",
        name: "price",
        required: true,
        selection:false,
        multiline:false,
        variant:'standard'
        
      },
]