import { Progress, Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const LoyaltyPoints = () => {

  const {user} = useSelector((state)=> state.users) 


  return (
    <div>
      <h1>Puntos fidelización</h1>
       <Stack>
        <Progress
          colorScheme='green'
          height='32px'
          value={user.points}
          min={0}
          max={500}
        />
      </Stack>


    </div>
  )
}

export default LoyaltyPoints
