package main

import (
	"fmt"
	"os"
	"time"

	"/Users/kcourse/jwx/jwa"
	"/Users/kcourse/jwx/jwk"
	"/Users/kcourse/jwx/jwt"
)

func main() {
	// private.keyファイルのパス
	keyFilePath := "/Users/kcourse/jwx/private.key"

	// private.keyファイルを読み込む
	keyData, err := os.ReadFile(keyFilePath)
	if err != nil {
		fmt.Println("ファイルの読み込みエラー:", err)
		return
	}

	// JWKをparse
	set, err := jwk.Parse(keyData)
	if err != nil {
		fmt.Println("JWKのパースエラー:", err)
		return
	}

	// ペイロードを設定
	claims := jwt.New()

	claims.Set("iss", "2893740928")
	claims.Set("sub", "2893740928")
	claims.Set("aud", "https://api.line.me/")
	claims.Set("exp", time.Now().Add(time.Hour*1).Unix())
	claims.Set("token_exp", time.Now().Add(time.Hour*24*30).Unix())

	// 秘密鍵を取得
	key, ok := set.Get(0)
	if !ok {
		fmt.Println("秘密鍵が見つかりません")
		return
	}

	// JWTを署名
	token, err := jwt.Sign(claims, jwa.RS256, key)
	if err != nil {
		fmt.Println("JWT署名エラー:", err)
		return
	}

	// 作成したJWTを表示
	fmt.Println("JWT:", string(token))
}
