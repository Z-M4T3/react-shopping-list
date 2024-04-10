import { motion } from "framer-motion";
import { useState } from "react";
import ListItems from "./ListItems";

function ShoppingList() {
    const [items, setItems] = useState(["Buy coffee", "Buy milk", "Buy sugar"]);
    const [itemInput, setItemInput] = useState("");

    const placeholders = ["Buy coffee", "Buy milk", "Buy sugar"];
    const placehlderNumber = Math.floor(Math.random() * placeholders.length);
    const [placeholder, setPlaceholder] = useState("Add a new item");

    const containerVariants = {
        initial: {
            opacity: 0,
            height: 0
        },
        animate: {
            opacity: 1,
            height: '100%'
        },
        whileHover: {
            boxShadow: "10px 10px 0 #00000025"
        }
    }

    const inputVariants = {
        initial: {
            width: 0,
        },
        animate: {
            width: '80%',
            boxShadow: "4px 4px 0 0 #3a65f150"
        },
        whileHover: {
            boxShadow: "6px 6px 0 0 #3a65f1af"
        }
    }

    const buttonVariants = {
        initial: {
            height: 0,
        },
        animate: {
            height: '100%',
            boxShadow: "4px 4px 0 0 #3a65f150"
        },
        whileHover: {
            boxShadow: "6px 6px 0 0 #3a65f1af"
        }
    }

    const fadeVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    function handleInput(event) {
        setItemInput(event.target.value);
    }

    function addTask() {
        if (itemInput.trim() !== "") {
            setItems(prevState => [...prevState, itemInput]);
            setItemInput("");
            setPlaceholder(placeholders[placehlderNumber]);
        }
    }

    return(
        <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
        transition={{
            type: "tween",
            duration: 1
        }}
        className="main_container">
            <h3>Shopping List</h3>
            <div className="inputsContainer">

                <motion.input 
                variants={inputVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                placeholder={placeholder}
                onChange={handleInput}
                value={itemInput}
                type="text" />

                <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                className="addButton"
                onClick={addTask}
                ><i className="fa-solid fa-plus"></i></motion.button>

            </div>
            
            {items.length > 0 ? 
            <ListItems items={items} setItems={setItems}/> 
            : <motion.p 
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            style={{textAlign: "center"}}>No items added yet</motion.p>}
        </motion.div>
    );
}

export default ShoppingList