import { motion, AnimatePresence } from "framer-motion";

function ListItems(props) {

    function itemUp(index) {
        if(index > 0) {
            const updatedItems = [...props.items];
            [updatedItems[index], updatedItems[index - 1]] 
            = [updatedItems[index - 1], updatedItems[index]];
            props.setItems(updatedItems);
        }
    }

    function itemDown(index) {
        if (props.items.length > index + 1) {
            const updatedItems = [...props.items];
            [updatedItems[index], updatedItems[index + 1]] 
            = [updatedItems[index + 1], updatedItems[index]];
            props.setItems(updatedItems);
        } 
    }

    function itemComplete(index) {
        props.setItems(prevState => [...prevState.filter((_, filterIndex) => index !== filterIndex)])
    }

    const liVariants = {
        initial: {
            x: "-100vw",
            opacity: 0,
            scale: 1 
        },

        animate: {
            x: 0,
            opacity: 1,
            boxShadow: "4px 4px 0 0 #3a65f150",
        },

        exit: {
            x: 100,
            opacity: 0
        },

        whileHover: {
            boxShadow: "6px 6px 0 0 #3a65f1af",
            scale: 1.1
        }
    }

    const actionVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.5
        },
        tap: {
            scale: 1
        }
    }

    return(
        <ul>
                <AnimatePresence>
                    {props.items.map((item, index) => <motion.li 
                    variants={liVariants}
                    layout
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="whileHover"
                    transition={{
                        type: "spring",
                        duration: .3
                    }}
                    key={index}>
                        <div className="itemText">{item}</div>
                        <div>
                            {index > 0 ? <motion.button 
                            variants={actionVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            className="actionButton positionButton" onClick={() => itemUp(index)}><i className="fa-solid fa-caret-up"></i></motion.button>
                            : ""}

                            {props.items.length > index + 1 ? <motion.button 
                            variants={actionVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            className="actionButton positionButton" onClick={() => itemDown(index)}><i className="fa-solid fa-caret-down"></i></motion.button>
                            : "" }

                            <motion.button 
                            variants={actionVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            className="actionButton completeButton" onClick={() => itemComplete(index)}><i className="fa-solid fa-check"></i></motion.button>
                        </div>
                    </motion.li>)}
                </AnimatePresence>
            </ul>
    );
}

export default ListItems