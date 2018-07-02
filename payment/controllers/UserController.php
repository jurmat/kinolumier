<?php

namespace micro\controllers;

use yii\rest\ActiveController;

/**
 * Class UserController
 * @package micro\controllers
 *
 * Приклад логіну
 * Посилається POST запит за адресою
 * http://lumiere.loc/payment/index.php/user/login
 * Замість lumiere.loc має бути адреса веб-серверу
 * в тілі запиту повинні бути поля, наприклад
 * username=user@gmail.com&password=112233
 * У відповідь має бути дано користувача, наприклад
 {
    "id": 1,
    "name": "Ігор",
    "surname": "Сидоренко",
    "username": "user@gmail.com",
    "password": "$2y$13$Kf3rZgkCjujpgXEcWtfKs.vJWkD0IJGNaD015XgGB4qvCE3JbYDX.",
    "phoneNumber": "+380664521236",
    "dateRegistered": "2018-04-05 00:00:00",
    "dateLastActive": "2018-04-05 00:00:00",
    "isAgreeSeeMessages": 1,
    "status": 1,
    "access_token": "_6MwuGeBVIs3cU8yKcxHTlC301Q96IJHDtEPQMJLqijSFS-ac4PCzV0_0xXsK2j6zxjnuNL7RKMDPJgKuCRF9Fk7qDOO7G-R2Y57cMFiVPjg2WmtUNQyPui5eY-GDS8EYHTsxI7Gkjf2eTALDl4DQ_folSqUdZ1s6SOqTz7Nosh7b7QF5mE3nfWOS8jRHaUmdQ-nTLLC",
    "auth_key": "QAHgCzelUHilY-scwwPU9LAhGqy6oIHJ"
 }
 *
 * ///////////
'Authorization: Bearer _6MwuGeBVIs3cU8yKcxHTlC301Q96IJHDtEPQMJLqijSFS-ac4PCzV0_0xXsK2j6zxjnuNL7RKMDPJgKuCRF9Fk7qDOO7G-R2Y57cMFiVPjg2WmtUNQyPui5eY-GDS8EYHTsxI7Gkjf2eTALDl4DQ_folSqUdZ1s6SOqTz7Nosh7b7QF5mE3nfWOS8jRHaUmdQ-nTLLC'
 * тобто
 * 'Authorization: Bearer значення поля access-token'
 * ///////////
 *
 *
 * Якщо пароль невірний то
{
"message": "Your password is invalid."
}
 *
 * Якщо логін невірний то
{
"message": "Your username is invalid."
}
 *
 * Створити користувача. Запит POST
 * URL
 * http://lumiere.loc/payment/index.php/user/create
 * тіло запиту
name=Андрій&surname=Говерко&username=user2@gmail.com&password=111222&phoneNumber=+380662233456&dateLastActive=2018-04-06 00:00:00&isAgreeSeeMessages=1&status=1
 *
 */

class UserController extends ActiveController
{
    public $modelClass = 'micro\models\User';

    public function behaviors()
    {
        // remove rateLimiter which requires an authenticated user to work
        $behaviors = parent::behaviors();
        unset($behaviors['authenticator']);
        unset($behaviors['rateLimiter']);

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => \yii\helpers\ArrayHelper::getValue(\Yii::$app->params, 'cors.origin', ['*']),
                'Access-Control-Request-Headers' => ['Authorization', 'X-Pagination-Total-Count', 'X-Pagination-Page-Count', 'X-Pagination-Current-Page', 'X-Pagination-Per-Page'],
                'Access-Control-Expose-Headers' => ['Authorization', 'X-Pagination-Total-Count', 'X-Pagination-Page-Count', 'X-Pagination-Current-Page', 'X-Pagination-Per-Page'],
            ]
        ];

        $behaviors['access'] = [
            'class' => \yii\filters\AccessControl::className(),
            'only' => ['special-callback', 'index'],
            'rules' => [
                [
                    'actions' => ['special-callback', 'index'],
                    'allow' => true,
                    'matchCallback' => function ($rule, $action) {
                        echo "user logged in\n";
                        return true;
                    }
                ],
            ],
        ];

        $behaviors['contentNegotiator']['formats']['text/html'] = \yii\web\Response::FORMAT_JSON;

        $behaviors['authenticator'] = [
            'class' => \yii\filters\auth\CompositeAuth::className(),
            'authMethods' => [
                \yii\filters\auth\HttpBearerAuth::className(),
                \yii\filters\auth\QueryParamAuth::className(),
            ],
        ];
        $behaviors['authenticator']['except'] = ['options', 'login', 'create'];

        return $behaviors;
    }

    /**
     * login a user
     * @return @user
     */
    public function actionLogin()
    {
        $request = \Yii::$app->request;
        $logUser = \micro\models\User::findByUsername($request->post("username"));

        if( $logUser === null ) {
            \Yii::$app->response->setStatusCode(401);
            return ['message' => 'Your username is invalid.'];
        }
        $isPassword = $logUser->validatePassword($request->post("password"));
        if( $isPassword) {
            return  $logUser;
        } else {
            \Yii::$app->response->setStatusCode(401);
            return ['message' => 'Your password is invalid.'];
        }
    }

}