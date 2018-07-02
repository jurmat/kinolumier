<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model micro\models\PaymentOrders */

$this->title = 'Зміна замовлення: '.$model->id;
$this->params['breadcrumbs'][] = ['label' => 'Payment Orders', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="payment-orders-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
