<?php

namespace micro\models;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;
use Yii;

/**
 * This is the model class for table "paymentUsers".
 *
 * @property int $id
 * @property string $name
 * @property string $surname
 * @property string $username
 * @property string $password
 * @property string $phoneNumber
 * @property string $dateRegistered
 * @property string $dateLastActive
 * @property int $isAgreeSeeMessages
 * @property int $status
 * @property string $access_token
 * @property string $auth_key
 *
 * @property PaymentOrders[] $paymentOrders
 */
class User extends ActiveRecord implements IdentityInterface
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'paymentUsers';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['username', 'password'], 'required'],
            [['dateRegistered', 'dateLastActive'], 'safe'],
            [['status'], 'integer'],
            [['name', 'surname'], 'string', 'max' => 40],
            [['username'], 'string', 'max' => 100],
            [['password', 'access_token', 'auth_key'], 'string', 'max' => 255],
            [['phoneNumber'], 'string', 'max' => 15],
            [['isAgreeSeeMessages'], 'string', 'max' => 1],
            [['username'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => "Ім'я",
            'surname' => 'Фамілія',
            'username' => 'Е-mail',
            'password' => 'Пароль',
            'phoneNumber' => 'Номер телефону',
            'dateRegistered' => 'Дата реєстрації',
            'dateLastActive' => 'Дата активності',
            'isAgreeSeeMessages' => 'Згода на розсилку повідомлень',
            'status' => 'Статус',
            'access_token' => 'Access Token',
            'auth_key' => 'Auth Key',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPaymentOrders()
    {
        return $this->hasMany(PaymentOrders::className(), ['paymentuser_id' => 'id']);
    }

    /**
     * @inheritdoc
     * @return UsersQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new UsersQuery(get_called_class());
    }

    /////////////////////////////////////////////////////////////
    ////                  IdentityInterface                 ////


    public function beforeSave($insert)
    {
        if (parent::beforeSave($insert)) {
            $this->dateLastActive = (new \DateTime('NOW'))->format('Y-m-d');
            $pass = $this->password;
            $this->password = Yii::$app->getSecurity()->generatePasswordHash($pass);
            $this->access_token = Yii::$app->getSecurity()->generateRandomString(200);
            if ($this->isNewRecord) {
                $this->auth_key = \Yii::$app->security->generateRandomString();
            }
            return true;
        }
        return false;
    }

    /**
     * Finds an identity by the given ID.
     *
     * @param string|int $id the ID to be looked for
     * @return IdentityInterface|null the identity object that matches the given ID.
     */
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    /**
     * Finds an identity by the given token.
     *
     * @param string $token the token to be looked for
     * @return IdentityInterface|null the identity object that matches the given token.
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }

    /**
     * @return int|string current user ID
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string current user auth key
     */
    public function getAuthKey()
    {
        return $this->auth_key;
    }

    /**
     * @param string $authKey
     * @return bool if auth key is valid for current user
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
    * Validates password
    *
    * @param string $password password to validate
    * @return boolean if password provided is valid for current user
    */
    public function validatePassword($password)
    {
        if (Yii::$app->getSecurity()->validatePassword($password, $this->password)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Finds user by username
     *
     * @param  string  $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        return static::findOne(['username' => $username]);
    }
}
