<?php

namespace micro\controllers;

use yii\rest\ActiveController;

/**
 * Class PaymentordersController
 * @package micro\controllers
 *
 * Переглянути список всіх замовлень
 * http://lumiere.loc/payment/index.php/paymentorders?access-token=_6MwuGeBVIs3cU8yKcxHTlC301Q96IJHDtEPQMJLqijSFS-ac4PCzV0_0xXsK2j6zxjnuNL7RKMDPJgKuCRF9Fk7qDOO7G-R2Y57cMFiVPjg2WmtUNQyPui5eY-GDS8EYHTsxI7Gkjf2eTALDl4DQ_folSqUdZ1s6SOqTz7Nosh7b7QF5mE3nfWOS8jRHaUmdQ-nTLLC
 * де значення access-token є в таблиці користувача. Тобто потрібно спершу їх отримати через user/login
 *
 * Замість запиту access-token в рядку URL реалізовано другий спосіб авторизації:
 * В заголовку Header запиту зробити такий запис
 *
 * ///////////
'Authorization: Bearer _6MwuGeBVIs3cU8yKcxHTlC301Q96IJHDtEPQMJLqijSFS-ac4PCzV0_0xXsK2j6zxjnuNL7RKMDPJgKuCRF9Fk7qDOO7G-R2Y57cMFiVPjg2WmtUNQyPui5eY-GDS8EYHTsxI7Gkjf2eTALDl4DQ_folSqUdZ1s6SOqTz7Nosh7b7QF5mE3nfWOS8jRHaUmdQ-nTLLC'
 * тобто
 * 'Authorization: Bearer значення поля access-token'
 * ///////////
 *
 * Переглянути замовлення за id = 1
 * http://lumiere.loc/payment/index.php/paymentorders/?id=1&access-token=
 * Переглянути замовлення за orderID = 1
 * http://lumiere.loc/payment/index.php/paymentorders/?orderID=1&access-token=
 * і т. п.
 * Додати замовлення. Має бути запит POST
 * http://lumiere.loc/payment/index.php/paymentorders/create?access-token=
 * Тіло запиту, такого вигляду
paymentuser_id=1&orderID=123&price=60&discount=1&orderStatus=1&paymentType=1&isCompleted=1
 *
 */

class PaymentordersController extends ActiveController
{
    public $modelClass = 'micro\models\PaymentOrders';
    public $enableCsrfValidation = false;

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

        $behaviors['contentNegotiator']['formats']['text/html'] = \yii\web\Response::FORMAT_JSON;

        $behaviors['authenticator'] = [
            'class' => \yii\filters\auth\CompositeAuth::className(),
            'authMethods' => [
                \yii\filters\auth\HttpBearerAuth::className(),
                \yii\filters\auth\QueryParamAuth::className(),
            ],
        ];
        $behaviors['authenticator']['except'] = ['options'];

        return $behaviors;
    }
}