<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model micro\models\PaymentOrders */

$this->title = 'Створити замовлення';
$this->params['breadcrumbs'][] = ['label' => 'Payment Orders', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="payment-orders-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
