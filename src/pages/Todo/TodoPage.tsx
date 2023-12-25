import {SafeAreaView, withSafeAreaInsets} from "react-native-safe-area-context";
import React, {useEffect, useState} from 'react'
import {Text, Alert, FlatList, TextInput, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import Add from '../../../assets/Add.svg'
import {Header} from "../../components/Header";
import {Task} from "../../components/Task";
import {EmptyTasks} from "../../components/EmptyTasks";

type TaskProps = {
    details: string,
    isComplete: boolean,
}

const TodoPage = ({navigation, route}) => {
    const [taskDetails, setTaskDetails] = useState('')
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [completedTasks, setCompletedTasks] = useState(0)

    useEffect(() => {
        const countTasks = tasks.reduce((count, task) => {
            if (task.isComplete) return count + 1
            return count
        }, 0);

        setCompletedTasks(countTasks)
    })

    function handleAddTask() {
        const isEqual = tasks.find(task => task.details === taskDetails);

        if (taskDetails.trim() === '') return Alert.alert('无效文本', '输入此任务的文本!')

        if (isEqual) return Alert.alert('重复任务', '已经有一个包含此文本的任务！');

        const task = {
            details: taskDetails,
            isComplete: false
        }

        setTasks((prevState) => [...prevState, task])
        setTaskDetails('')
    }

    function handleTaskRemove(details: string) {
        setTasks((prevState) =>
            prevState.filter((task) => task.details !== details))
    }

    function handleTaskComplete(details: string) {
        setTasks((tasks) => tasks.map((task) =>
            task.details === details
                ? {...task, isComplete: !task.isComplete}
                : task
        ))
    }

    return (
        <>
            <Header/>
            <View style={styles.container}>
                <View style={styles.addTasks}>
                    <TextInput
                        style={styles.input}
                        placeholder="添加新任务"
                        placeholderTextColor={'#808080'}
                        onChangeText={setTaskDetails}
                        value={taskDetails}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                        <Add/>
                    </TouchableOpacity>
                </View>

                <View style={styles.tasksInfo}>
                    <View style={styles.infoType}>
                        <Text style={styles.title}>创建</Text>
                        <Text style={styles.quantity}>{tasks.length}</Text>
                    </View>

                    <View style={styles.infoType}>
                        <Text style={[styles.title, {color: '#8284FA'}]}>已完成</Text>
                        <Text style={styles.quantity}>{completedTasks}</Text>
                    </View>
                </View>

                {tasks.length > 0 ? (
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.details}
                        renderItem={({item}) => (
                            <Task key={item.details} details={item.details} isComplete={item.isComplete}
                                  onRemove={() => handleTaskRemove(item.details)}
                                  onComplete={() => handleTaskComplete(item.details)}/>
                        )}
                    />
                ) : (
                    <EmptyTasks/>
                )}
            </View>
        </>
    )
};

export default withSafeAreaInsets(TodoPage);
