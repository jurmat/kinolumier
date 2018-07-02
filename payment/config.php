<?php
return [
    'id' => 'micro-app',
    // the basePath of the application will be the `micro-app` directory
    'basePath' => __DIR__,
    // this is where the application will find all controllers
    'controllerNamespace' => 'micro\controllers',
    // set an alias to enable autoloading of classes from the 'micro' namespace
    'aliases' => [
        '@micro' => __DIR__,
    ],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'kinolumiere',
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn'  => 'mysql:host=bizert.mysql.ukraine.com.ua;dbname=bizert_kino',
            'username' => 'bizert_kino',
            'password' => '8775munm',
            'charset' => 'utf8',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => true,
            'enableStrictParsing' => false,
            'rules' => [
                [ 'class' => 'yii\rest\UrlRule', 'controller' => 'micro/user' ],
                [ 'class' => 'yii\rest\UrlRule', 'controller' => 'micro/paymentorders' ],
            ]
        ],
        'user' => [
//            'class' => 'app\web\User',
            'identityClass' => 'micro\models\User',
            'enableSession' => false,
            'loginUrl' => null,
        ],
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
        ],
    ],
];