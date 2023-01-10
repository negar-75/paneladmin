import {getCategories, getStations} from '../../services/user.service';
import useGetApi from "../../hooks/useGetApi";


export const AddItemInputs = [
    {
        id: '1',
        label: "Item name",
        type: "text",
        placeholder: " ",
        name:"name",
        required: true,
        multiline:false,
        variant:'standard'
        
      },
      {
        id: '2',
        label: "Description",
        type: "text",
        placeholder: " ",
        name:"description",
        required: true,
        multiline:true,
        variant:'standard'
        
        
      },
      {
        id: '3',
        label: "Category",
        type: "text",
        placeholder: "",
        name:"category_id",
        keyName :'category_name',
        required: true,
        selectable:'true',
        multiline:false,
        variant:'standard',
        func: () => getCategories(0,100),
        

      },
      {
        id: '4',
        label: "Stations",
        type: "text",
        placeholder: " ",
        name: "station_id",
        required: true,
        multiline:false,
        keyName :'station_name',
        selectable:'true',
        variant:'standard',
        func: () => getStations(0,100)

        
      },
      {
        id: '5',
        label: "Sauce",
        type: "text",
        placeholder: " ",
        name:  "sauces",
        required: true,
        selectable:'true',
        multiline:false,
        variant:'standard'

        
      },
      {
        id: '6',
        label: "Size",
        type: "text",
        placeholder: " ",
        name: "size",
        required: true,
        multiline:false,
        variant:'standard'
        
      },
      {
        id: '7',
        label: "Price",
        type: "number",
        placeholder: " ",
        name: "price",
        required: true,
        multiline:false,
        variant:'standard'
        
      },
]