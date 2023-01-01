export const AddItem = [
    {
        id: 1,
        label: "Item name",
        type: "text",
        placeholder: "Ketchup",
        name:"name",
        required: true
        
      },
      {
        id: 2,
        label: "Description",
        type: "text",
        placeholder: " ",
        name:"description",
        required: true,
        multiline:true
        
      },
      {
        id: 3,
        label: "Category",
        type: "text",
        placeholder: "",
        name:"category_id",
        selection:true
      },
      {
        id: 4,
        label: "Stations",
        type: "text",
        placeholder: " ",
        name: "station_id",
        selection:true

        
      },
      {
        id: 5,
        label: "Sauce",
        type: "text",
        placeholder: " ",
        name:  "sauces",
        selection:true,

        
      },
      {
        id: 6,
        label: "Size",
        type: "text",
        placeholder: " ",
        name: "size",
        
      },
      {
        id: 7,
        label: "Price",
        type: "number",
        placeholder: " ",
        name: "price",
        
      },
]