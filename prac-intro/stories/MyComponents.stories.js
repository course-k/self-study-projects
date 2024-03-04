import MyComponents from "../components/practice-storybook/MyComponents";

export default {
    title: 'MyApp/MyComponents',
    component: MyComponents
}

export const NewUser = {
    render: () => <MyComponents isNewUser={true} />
}


export const Member = {
    args: {
        isNewUser: false
    }
}