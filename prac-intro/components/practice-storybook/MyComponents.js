
const MyComponents = ({
    isNewUser, bool, num1, num2
    , obj1, obj2, enum1, enum2
    , enum3, enum4, enum5, enum6
    , str1, str2, str3
    , handleClick
}) => {
    return (
        <>
            <label htmlFor="userId">ユーザー名：</label>
            <input type="text" id="userId" disabled={isNewUser} />
            <label htmlFor="password" >パスワード：</label>
            <input type="password" id="password" disabled={isNewUser} />
            <button type="button" onClick={handleClick}>{isNewUser ? '新規登録' : 'ログイン'}</button>
            <h3>真偽値：{bool}</h3>
            <h3>数値1: {num1}</h3>
            <h3>数値2: {num2}</h3>
            <h3>オブジェクト1: {obj1}</h3>
            <h3>オブジェクト2: {obj2}</h3>
            <h3>列挙1: {enum1}</h3>
            <h3>列挙2: {enum2}</h3>
            <h3>列挙3: {enum3}</h3>
            <h3>列挙4: {enum4}</h3>
            <h3>列挙5: {enum5}</h3>
            <h3>列挙6: {enum6}</h3>
            <h3>文字列1: {str1}</h3>
            <h3>文字列2: {str2}</h3>
            <h3>文字列3: {str3}</h3>
        </>
    );
};

export default MyComponents