<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model micro\models\User */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Users', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Змінити', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Видалити', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Ви впевнені, що хочете видалити користувача?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?php try {
      echo  DetailView::widget([
            'model' => $model,
            'attributes' => [
                'id',
                'name',
                'surname',
                'username',
                //            'password',
                'phoneNumber',
                'dateRegistered',
                'dateLastActive',
//                'isAgreeSeeMessages',
                [
                    'attribute' => 'isAgreeSeeMessages',
                    'format' => 'text',
                    'value' => function ($model) {
                        return $model->isAgreeSeeMessages == 1 ? "Так" : "Ні";
                    },
                ],
                //            'status',
                [
                    'attribute' => 'status',
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
                //            'access_token',
                //            'auth_key',
            ],
        ]);
    } catch (Exception $e) {
    } ?>

</div>
