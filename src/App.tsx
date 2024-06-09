import {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./App.module.css"
import Guest from "./components/Guest/Guest.tsx";

interface IGuest {
    id: string,
    guestsCount: number,
    incoming: string,
    message: string,
    name: string
}

function App() {
    const [guests, setGuests] = useState<IGuest[]>([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://wedding-9b430-default-rtdb.firebaseio.com/.json")

                const guestsArray = []

                for (const key in response.data) {
                    guestsArray.push({
                        ...response.data[key],
                        id: key
                    })
                }

                setError("")
                setGuests(guestsArray)
            } catch (e) {
                setError("Не возможно получить список гостей, попробуйте позже")
            }
        }

        getData()
    }, [])

    return (
        <div className={styles.container}>
            {
                error.length > 0 ? <p>{error}</p> : null
            }
            {
                guests.length > 0 ? guests.map(item => {
                    return <Guest
                        key={item.id}
                        id={item.id}
                        guestsCount={item.guestsCount}
                        incoming={item.incoming}
                        message={item.message}
                        name={item.name}
                    />
                }) : <p className={styles.message}>Список гостей пока пуст</p>
            }
        </div>
    );
}

export default App;