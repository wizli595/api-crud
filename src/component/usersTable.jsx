import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TableHead from "./tableHead";
import UserRow from "./userRow";
import { useState } from "react";
import Update from "./update";
import svg from '../assets/reload.svg';

const UserTable = () => {
    const [show, setShow] = useState({
        display: false,
        data: ""
    })
    const [hideId, setHideid] = useState([])
    const { loading, users, err } = useFetch("")

    return (<>
        {loading && <div className="text-center mt-10">loading...</div>}
        <div className="container relative max-w-7xl w-9/12 m-auto mt-8">
            <div className="mb-4 flex justify-between mx-5">
                <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">users</h1>
                <div className="flex justify-end">
                    <img src={svg} alt="refrch"
                        className="mr-2 cursor-pointer" onClick={() => location.reload()} />
                    <Link to={"/api-crud/create"} >
                        <button
                            className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">
                            create
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full overflow-auto">
                {err && <div className="text-center mb-2 text-red-600">{err}</div>}
                <table >
                    <TableHead />
                    <tbody>
                        {users && users.map((e, i) => {
                            if (e._id !== hideId[i]) return <UserRow key={e._id} usr={e} id={i + 1} show={setShow} hide={setHideid} />
                        })}
                    </tbody>
                </table>
            </div>
            {show.display && <Update usr={show.data} show={setShow} />}
        </div>
    </>);
}

export default UserTable;