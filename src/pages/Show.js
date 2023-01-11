import {Form, useLoaderData} from "react-router-dom"

function Show(props){
    const person = useLoaderData()
    return(
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name}/>

            <h2>Update {person.name}</h2>

            <Form action={`/update/${person._id}`} method= "post">
                <input defaultValue={person.name} type="input" name="name" placeholder="Person's Name"/>
                <input defaultValue={person.image} type="input" name="image" placeholder="Person's Image"/>
                <input defaultValue={person.title} type="input" name="title" placeholder="Person's title"/>
                <input type="submit" value={`update ${person.name}`}/>
            </Form>
            <h2>Delete Person</h2>
            <Form action={`/delete/${person._id}`} method= "post">
                <input type="submit" value={`delete ${person.name}`}/>
            </Form>

        </div>
    )
}
export default Show