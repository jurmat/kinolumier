<?php

namespace micro\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use micro\models\PaymentOrders;

/**
 * PaymentOrdersSearch represents the model behind the search form of `app\models\PaymentOrders`.
 */
class PaymentOrdersSearch extends PaymentOrders
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'paymentuser_id', 'orderID', 'price', 'discount', 'orderStatus', 'paymentType'], 'integer'],
            [['dateCreated', 'isCompleted'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = PaymentOrders::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'paymentuser_id' => $this->paymentuser_id,
            'orderID' => $this->orderID,
            'price' => $this->price,
            'discount' => $this->discount,
            'orderStatus' => $this->orderStatus,
            'dateCreated' => $this->dateCreated,
            'paymentType' => $this->paymentType,
        ]);

        $query->andFilterWhere(['like', 'isCompleted', $this->isCompleted]);

        return $dataProvider;
    }
}
