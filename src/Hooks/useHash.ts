import { genSaltSync, hashSync, compare } from 'bcryptjs';

const useHash = () => {
    const ROUND_SIZE = 15
    const toHash = async (data: string) => {
        const salted = genSaltSync(ROUND_SIZE)
        const hashed = hashSync(data, salted)
        
        return hashed
    }

    const compareHash = async (data: string, hash: string) => {
        return compare(data, hash)
    }

    return { toHash, compareHash }
}

export default useHash;