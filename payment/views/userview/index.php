<?php

use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel micro\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Користувачі';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Додати користувача', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?php try {
        echo GridView::widget([
            'dataProvider' => $dataProvider,
            'filterModel' => $searchModel,
            'columns' => [
                ['class' => 'yii\grid\SerialColumn'],

                'id',
                'name',
                'surname',
                'username',
                //            'password',
                'phoneNumber',
//                'dateRegistered',
            [
                'attribute' => 'dateRegistered',
                'format' => ['date', 'php:Y.m.d']
            ],
                //'dateLastActive',
//                'isAgreeSeeMessages',
                [
                    'attribute' => 'isAgreeSeeMessages',
                    'filter'=>array("1"=>"Так", "2"=>"Ні"),
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->isAgreeSeeMessages == 1 ? "Так" : "Ні";
                    },
                ],
                //            'status',
                [
                    'attribute' => 'status',
                    'filter'=>array("1"=>"Активний", "2"=>"Заблокований", "3" => "Видалений"),
                    'format' => 'text',
                    'value' => function ($model) {
                        switch ($model->status) {
                            case 1:
                                return "Активний";
                            case 2:
                                return "Заблокований";
                            case 3:
                                return "Видалений";

                        }
                    },
                ],
                //'access_token',
                //'auth_key',

                ['class' => 'yii\grid\ActionColumn'],
            ],
        ]);
    } catch (Exception $e) {
    } ?>
</div>
