import { actionAsyncStorage } from "next/dist/client/components/action-async-storage.external";
import MyComponents from "../components/practice-storybook/MyComponents";

export default {
    title: 'MyApp/MyComponents',
    component: MyComponents,
    argTypes: {
        bool: {
            type: 'boolean',
            description: '真偽値を設定'
        }
        , num1: {
            type: 'number',
            description: '数値1を設定'
        }
        , num2: {
            type: 'number',
            description: '数値2を設定',
            control: { type: 'range' }
        }
        , obj1: {
            type: {
                name: 'object',
                value: { prop: 'hoge' }
            },
            description: 'オブジェクト1を設定',
            control: { type: 'object' }
        }
        , obj2: {
            type: {
                name: 'object',
                value: { prop: 'hoge' }
            },
            description: 'オブジェクト2を設定',
            control: { type: 'file' }
        }
        , enum1: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙1を設定',
            control: { type: 'radio' }
        }
        , enum2: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙2を設定',
            control: { type: 'inline-radio' }
        }
        , enum3: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙3を設定',
            control: { type: 'check' }
        }
        , enum4: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙4を設定',
            control: { type: 'inline-check' }
        }
        , enum5: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙5を設定',
            control: { type: 'select' }
        }
        , enum6: {
            type: {
                name: 'enum',
                value: ['apple', 'banana', 'cherry']
            },
            description: '列挙6を設定',
            control: { type: 'multi-select' }
        }
        , str1: {
            type: 'string',
            description: '文字列1を設定'
        }
        , str2: {
            type: 'string',
            description: '文字列2を設定',
            control: { type: 'color' }
        }
        , str3: {
            type: 'string',
            description: '文字列3を設定',
            control: { type: 'date' }
        }
    }
}

export const NewUser = {
    args: {
        handleClick: action('true')
    }
}


export const Member = {
    args: {
        isNewUser: false
    }
}