<?php

namespace micro\models;

/**
 * This is the ActiveQuery class for [[PaymentOrders]].
 *
 * @see PaymentOrders
 */
class PaymentOrdersQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * @inheritdoc
     * @return PaymentOrders[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return PaymentOrders|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
