import {useState,useEffect,createContext} from "react"

const Context = createContext();

function ContextProvider({children}) {
    const [allPhotos,setAllPhotos]=useState([]);
    const [cartItems, setCartItems] = useState([]);
    const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    const handleToggle=(id)=>{
       const updatedArr=allPhotos.map(photo=>{
        if(photo.id===id)
        {
            console.log(id);
            console.log(!photo.isFavorite);
            return {
                ...photo,
                isFavorite: !photo.isFavorite,
            }
        }
        return photo
       })
       setAllPhotos(updatedArr)
    }
    const addToCart=(newItem)=>{
        console.log("Clicked")
        setCartItems(prevItems=>[...prevItems,newItem])
    }
    const removeFromCart=(id)=>{
        const newArr=cartItems.filter(item=>item.id!==id)
        setCartItems(newArr)
    }
    function emptyCart() {
        setCartItems([])
    }
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAllPhotos(data))
    },[])


    return (
        <Context.Provider value={{allPhotos,handleToggle,addToCart,removeFromCart,cartItems,emptyCart}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider,Context};