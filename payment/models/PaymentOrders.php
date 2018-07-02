<?php

namespace micro\models;

use Yii;

/**
 * This is the model class for table "paymentOrders".
 *
 * @property int $id
 * @property int $paymentuser_id
 * @property int $orderID
 * @property int $price
 * @property int $discount
 * @property int $orderStatus
 * @property string $dateCreated
 * @property int $paymentType
 * @property int $isCompleted
 *
 * @property PaymentUsers $paymentuser
 */
class PaymentOrders extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'paymentOrders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['paymentuser_id', 'orderID', 'price', 'orderStatus', 'paymentType', 'isCompleted'], 'required'],
            [['paymentuser_id', 'orderID', 'price', 'discount', 'orderStatus', 'paymentType'], 'integer'],
            [['dateCreated'], 'safe'],
            [['isCompleted'], 'string', 'max' => 1],
            [['paymentuser_id'], 'exist', 'skipOnError' => true, 'targetClass' => \micro\models\User::className(), 'targetAttribute' => ['paymentuser_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'paymentuser_id' => 'ID користувача' ,
            'orderID' => 'ID замовлення',
            'price' => 'Вартість, грн.',
            'discount' => 'Знижка, %',
            'orderStatus' => 'Статус',
            'dateCreated' => 'Дата проведення операції',
            'paymentType' => 'Тип оплати',
            'isCompleted' => 'Виконання',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPaymentuser()
    {
        return $this->hasOne( \micro\models\User::className(), ['id' => 'paymentuser_id']);
    }

    /**
     * @inheritdoc
     * @return PaymentOrdersQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new PaymentOrdersQuery(get_called_class());
    }
}
