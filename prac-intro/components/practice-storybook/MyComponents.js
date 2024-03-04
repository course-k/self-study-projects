const MyComponents = ({
    isNewUser = false
}) => {
    return (
        <>
            <label htmlFor="userId">ユーザー名：</label>
            <input type="text" id="userId" disabled={isNewUser} />
            <label htmlFor="password" >パスワード：</label>
            <input type="password" id="password" disabled={isNewUser} />
            <button type="button" >{isNewUser ? '新規登録' : 'ログイン'}</button>
        </>
    );
};

export default MyComponents