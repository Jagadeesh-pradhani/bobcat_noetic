documtent







sudo apt install ros-noetic-turtlebot3-teleop









laucnh robot in gazebo 

roslaunch bobcat3 gazebo.launch 





to move robot using teleopkey


export TURTLEBOT3_MODEL=burger
roslaunch turtlebot3_teleop turtlebot3_teleop_key.launch 



to lift forklift


rostopic pub /controller1/command std_msgs/Float64 "data: 0.0" 

for -0.4 to 1.5
